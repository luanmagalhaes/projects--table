import MaterialTable, { MaterialTableProps } from "material-table";

export const Table = ({
  columns,
  isLoading,
  title,
  data,
  ...rest
}: MaterialTableProps<object>) => {
  return (
    <MaterialTable
      localization={{
        pagination: {
          labelRowsSelect: "Rows",
          labelDisplayedRows: "{from}-{to} de {count}", // perguntar
        },
        toolbar: {
          searchPlaceholder: "Search here for a project",
          searchTooltip: "Search",
        },
      }}
      options={rest.options}
      columns={columns}
      isLoading={isLoading}
      title={title}
      data={data}
    />
  );
};
