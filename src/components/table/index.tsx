import MaterialTable, { MaterialTableProps } from "material-table";

export const Table = ({
  columns,
  title,
  data,
  ...rest
}: MaterialTableProps<object>) => {
  return (
    <MaterialTable
      localization={{
        pagination: {
          labelRowsSelect: "Rows",
          labelDisplayedRows: "{from}-{to} of {count}",
        },
        toolbar: {
          searchPlaceholder: "Search here for a project",
          searchTooltip: "Search",
        },
      }}
      options={rest.options}
      columns={columns}
      title={title}
      data={data}
    />
  );
};
