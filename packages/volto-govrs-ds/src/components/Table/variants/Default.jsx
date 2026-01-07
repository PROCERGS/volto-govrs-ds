import React from 'react';
import '../Table.scss';
import './Default.scss';

const DEFAULT_PAGE_SIZES = [20, 50, 100];

const Default = ({
  title = '',
  columns = [],
  items = [],
  showCheckbox = false,
  searchColumn = null,
  onSelectionChange = () => {},
}) => {
  const [pageSize, setPageSize] = React.useState(DEFAULT_PAGE_SIZES[0]);
  const [page, setPage] = React.useState(1);

  const [searchTerm, setSearchTerm] = React.useState('');
  const [debouncedSearch, setDebouncedSearch] = React.useState('');
  const [activeSearchColumn, setActiveSearchColumn] = React.useState(
    searchColumn || (columns[0] && columns[0].key),
  );

  const [searchOpen, setSearchOpen] = React.useState(false);
  const searchInputRef = React.useRef(null);

  React.useEffect(() => {
    if (searchOpen && searchInputRef.current) searchInputRef.current.focus();
  }, [searchOpen]);

  React.useEffect(() => {
    setActiveSearchColumn(searchColumn || (columns[0] && columns[0].key));
  }, [searchColumn, columns]);

  React.useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchTerm.trim()), 250);
    return () => clearTimeout(t);
  }, [searchTerm]);

  const [sort, setSort] = React.useState(null);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set());

  const columnTypes = React.useMemo(() => {
    const sample = items && items.length ? items.slice(0, 20) : [];
    const types = {};
    columns.forEach((col) => {
      const key = col.key;
      let votes = { date: 0, number: 0, string: 0 };
      sample.forEach((it) => {
        const v = it[key];
        if (
          typeof v === 'string' &&
          /^\d{4}-\d{2}-\d{2}(T|$)/.test(v) &&
          !Number.isNaN(Date.parse(v))
        )
          votes.date++;
        else if (
          v != null &&
          (typeof v === 'number' ||
            (typeof v === 'string' && /^-?\d+(\.\d+)?$/.test(String(v).trim())))
        )
          votes.number++;
        else votes.string++;
      });
      types[key] =
        votes.date > votes.number && votes.date > votes.string
          ? 'date'
          : votes.number > votes.string
            ? 'number'
            : 'string';
    });
    return types;
  }, [columns, items]);

  const pageResult = React.useMemo(() => {
    const q = debouncedSearch ? debouncedSearch.toLowerCase() : '';

    let filtered = items;
    if (q) {
      filtered = items.filter((it) => {
        if (searchColumn)
          return String(it[searchColumn] ?? '')
            .toLowerCase()
            .includes(q);
        if (activeSearchColumn)
          return String(it[activeSearchColumn] ?? '')
            .toLowerCase()
            .includes(q);
        return columns.some((c) =>
          String(it[c.key] ?? '')
            .toLowerCase()
            .includes(q),
        );
      });
    }

    const totalFilteredLocal = filtered.length;

    let sorted = filtered;
    if (sort && sort.key) {
      const key = sort.key;
      const dir = sort.direction === 'desc' ? -1 : 1;
      const type = columnTypes[key] || 'string';
      sorted = [...filtered].sort((a, b) => {
        const va = a[key];
        const vb = b[key];
        if (type === 'number') return (Number(va) - Number(vb)) * dir;
        if (type === 'date') return (Date.parse(va) - Date.parse(vb)) * dir;
        return String(va ?? '').localeCompare(String(vb ?? '')) * dir;
      });
    }

    const totalPages = Math.max(1, Math.ceil(totalFilteredLocal / pageSize));
    const start = (page - 1) * pageSize;
    const end = Math.min(totalFilteredLocal, start + pageSize);
    const pageItems = sorted.slice(start, end);

    return {
      items: pageItems,
      totalFiltered: totalFilteredLocal,
      totalPages,
      startIndex: start,
      endIndex: end,
    };
  }, [
    items,
    debouncedSearch,
    searchColumn,
    activeSearchColumn,
    columns,
    sort,
    page,
    pageSize,
    columnTypes,
  ]);

  const sortedVisibleItems = pageResult.items;
  const totalPagesFiltered = pageResult.totalPages;
  const totalFiltered = pageResult.totalFiltered;
  const startIndex = pageResult.startIndex;
  const endIndex = pageResult.endIndex;

  function itemKeyFor(item) {
    const idx = items.indexOf(item);
    return item && item.id ? String(item.id) : `__idx_${idx}`;
  }

  function updateSelectedKeys(nextKeys) {
    const prev = selectedKeys;
    if (prev.size === nextKeys.size) {
      let same = true;
      nextKeys.forEach((k) => {
        if (!prev.has(k)) same = false;
      });
      if (same) return;
    }

    const newSet = new Set(nextKeys);
    setSelectedKeys(newSet);
    const selectedItems = items.filter((it) => newSet.has(itemKeyFor(it)));
    try {
      onSelectionChange(selectedItems);
    } catch (e) {}
  }

  function isIsoDateString(v) {
    if (typeof v !== 'string') return false;

    const isoLike = /^\d{4}-\d{2}-\d{2}(T|$)/;
    return isoLike.test(v) && !Number.isNaN(Date.parse(v));
  }

  function onPrev() {
    setPage((p) => Math.max(1, p - 1));
  }

  function onNext() {
    setPage((p) => Math.min(totalPagesFiltered, p + 1));
  }

  function toggleSelectAllVisible() {
    const visibleKeys = new Set(sortedVisibleItems.map((it) => itemKeyFor(it)));
    const allSelected = Array.from(visibleKeys).every((k) =>
      selectedKeys.has(k),
    );
    const next = new Set(selectedKeys);
    if (allSelected) visibleKeys.forEach((k) => next.delete(k));
    else visibleKeys.forEach((k) => next.add(k));
    updateSelectedKeys(next);
  }

  function toggleRowSelection(row) {
    const key = itemKeyFor(row);
    const next = new Set(selectedKeys);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    updateSelectedKeys(next);
  }

  return (
    <div className="table-component table-default">
      {title && (
        <div className="table-header">
          <div className="table-title-desktop paragraph-12-small">{title}</div>
          <div className="table-title-mobile paragraph-4-short">{title}</div>
          <div className="table-header-search">
            {!searchOpen && (
              <button
                type="button"
                className="table-search-toggle"
                aria-expanded={searchOpen}
                aria-label={searchOpen ? 'Fechar pesquisa' : 'Abrir pesquisa'}
                onClick={() => setSearchOpen((s) => !s)}
              >
                <svg
                  width="28"
                  height="32"
                  viewBox="0 0 28 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M21.6943 21.8438C21.9755 22.1562 21.9755 22.625 21.663 22.9062L20.788 23.7812C20.5068 24.0938 20.038 24.0938 19.7255 23.7812L16.6318 20.6875C16.4755 20.5312 16.413 20.3438 16.413 20.1562V19.625C15.288 20.5 13.913 21 12.413 21C8.81929 21 5.91304 18.0938 5.91304 14.5C5.91304 10.9375 8.81929 8 12.413 8C15.9755 8 18.913 10.9375 18.913 14.5C18.913 16.0312 18.3818 17.4062 17.538 18.5H18.038C18.2255 18.5 18.413 18.5938 18.5693 18.7188L21.6943 21.8438ZM12.413 18.5C14.6005 18.5 16.413 16.7188 16.413 14.5C16.413 12.3125 14.6005 10.5 12.413 10.5C10.1943 10.5 8.41304 12.3125 8.41304 14.5C8.41304 16.7188 10.1943 18.5 12.413 18.5Z"
                    fill="#1A7235"
                  />
                </svg>
              </button>
            )}

            <div
              className={`table-header-search-controls ${searchOpen ? 'is-open' : ''}`}
            >
              {!searchColumn && (
                <select
                  className="table-footer-select"
                  value={activeSearchColumn}
                  onChange={(e) => setActiveSearchColumn(e.target.value)}
                  aria-label="Coluna de pesquisa"
                >
                  {columns.map((c) => (
                    <option key={c.key} value={c.key}>
                      {c.label}
                    </option>
                  ))}
                </select>
              )}
              <input
                ref={searchInputRef}
                type="search"
                placeholder="Pesquisar..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setPage(1);
                }}
                aria-label="Pesquisar na tabela"
              />
              <button
                type="button"
                className="table-search-close"
                aria-label="Fechar pesquisa"
                onClick={() => setSearchOpen(false)}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M11 1L1 11M1 1l10 10"
                    stroke="#666"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="table-wrapper">
        <table className="table-default__table" role="table">
          <thead>
            <tr className="table-default__headrow">
              {showCheckbox && (
                <th className="table-col-checkbox">
                  <input
                    type="checkbox"
                    aria-label="Selecionar todas as linhas visíveis"
                    onChange={toggleSelectAllVisible}
                    checked={
                      sortedVisibleItems.length > 0 &&
                      sortedVisibleItems.every((it) =>
                        selectedKeys.has(itemKeyFor(it)),
                      )
                    }
                  />
                </th>
              )}
              {columns.map((c) => {
                const isSorted = sort && sort.key === c.key;
                return (
                  <th
                    key={c.key}
                    className={`table-head-cell ${isSorted ? 'is-sorted' : ''}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      if (!isSorted) {
                        const sample =
                          items && items.length ? items[0][c.key] : null;
                        if (isIsoDateString(sample))
                          setSort({ key: c.key, direction: 'desc' });
                        else setSort({ key: c.key, direction: 'asc' });
                      } else if (sort.direction === 'asc')
                        setSort({ key: c.key, direction: 'desc' });
                      else setSort(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        e.currentTarget.click();
                      }
                    }}
                  >
                    <div className="table-head-label paragraph-12-small">
                      {c.label}
                    </div>
                    {isSorted && (
                      <span className="table-sort-icon" aria-hidden>
                        <svg
                          width="28"
                          height="32"
                          viewBox="0 0 28 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.1943 17H17.6318C18.288 17 18.6318 17.8125 18.163 18.2812L14.4443 22C14.1318 22.3125 13.663 22.3125 13.3818 22L9.66304 18.2812C9.16304 17.8125 9.50679 17 10.1943 17ZM18.163 13.7188C18.6318 14.2188 18.288 15 17.6318 15H10.1943C9.50679 15 9.16304 14.2188 9.66304 13.7188L13.3818 10C13.663 9.71875 14.1318 9.71875 14.4443 10L18.163 13.7188Z"
                            fill="#1A7235"
                          />
                        </svg>
                      </span>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {sortedVisibleItems.map((row, rowIndex) => {
              const rowKey = itemKeyFor(row);
              return (
                <tr key={rowKey} className="table-row">
                  {showCheckbox && (
                    <td className="table-col-checkbox">
                      <input
                        type="checkbox"
                        aria-label={`Selecionar linha ${startIndex + rowIndex + 1}`}
                        checked={selectedKeys.has(rowKey)}
                        onChange={() => toggleRowSelection(row)}
                      />
                    </td>
                  )}
                  {columns.map((c) => (
                    <td key={c.key} className="table-cell">
                      {row[c.key] ?? ''}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <div className="table-footer-left">
          <span className="table-footer-label">Exibir</span>
          <select
            className="table-footer-select"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
          >
            {DEFAULT_PAGE_SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <span className="table-footer-info">
            {startIndex + 1}-{endIndex} de {totalFiltered} itens
          </span>
        </div>

        <div className="table-footer-right">
          {totalFiltered > pageSize && (
            <>
              <span className="table-footer-label">Página</span>
              <select
                className="table-footer-select"
                value={page}
                onChange={(e) => setPage(Number(e.target.value))}
              >
                {Array.from({ length: totalPagesFiltered }).map((_, idx) => (
                  <option key={idx} value={idx + 1}>
                    {idx + 1}
                  </option>
                ))}
              </select>

              <button
                className="table-pager-btn"
                onClick={onPrev}
                aria-label="Página anterior"
                disabled={page === 1}
                type="button"
              >
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M0.281269 4.53125L4.53127 0.28125C4.84377 0 5.31252 0 5.59377 0.28125L6.31252 1C6.59377 1.28125 6.59377 1.78125 6.31252 2.0625L3.28127 5.0625L6.31252 8.09375C6.59377 8.375 6.59377 8.84375 6.31252 9.15625L5.59377 9.84375C5.31252 10.1562 4.84377 10.1562 4.53127 9.84375L0.281269 5.59375C1.90735e-05 5.3125 1.90735e-05 4.84375 0.281269 4.53125Z"
                    fill="#1A7235"
                  />
                </svg>
              </button>
              <button
                className="table-pager-btn"
                onClick={onNext}
                aria-label="Próxima página"
                disabled={page === totalPagesFiltered}
                type="button"
              >
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                  style={{ transform: 'scaleX(-1)' }}
                >
                  <path
                    d="M0.281269 4.53125L4.53127 0.28125C4.84377 0 5.31252 0 5.59377 0.28125L6.31252 1C6.59377 1.28125 6.59377 1.78125 6.31252 2.0625L3.28127 5.0625L6.31252 8.09375C6.59377 8.375 6.59377 8.84375 6.31252 9.15625L5.59377 9.84375C5.31252 10.1562 4.84377 10.1562 4.53127 9.84375L0.281269 5.59375C1.90735e-05 5.3125 1.90735e-05 4.84375 0.281269 4.53125Z"
                    fill="#1A7235"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Default;
