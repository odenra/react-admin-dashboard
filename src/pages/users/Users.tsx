import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"
import { userRows } from "../../data";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: "avatar",
    headerName: "avatar",
    width:100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="avatar"/>
    }  
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];


const Users = () => {
  return (
    <div className="users">

      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>

      <DataTable slug="users" columns={columns} rows={userRows}/>

    </div>
  )
}

export default Users