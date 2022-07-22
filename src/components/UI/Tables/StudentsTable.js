import React, { useMemo, useEffect, Fragment } from "react";

import {
  fetchStudentsData,
  fetchOneStudent,
} from "../../../store/students-slice";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { useSelector, useDispatch } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SearchInput from "../Input/SearchInput";
import PrintButton from "../Button/PrintButton";

import SortIcon from "@mui/icons-material/Sort";
import classes from "./Table.module.css";

import { studentsActions } from "../../../store/students-slice";
import { uiActions } from "../../../store/ui-slice";
import ButtonGroup from "../Button/ButtonGroup";
import RegisterButton from "../Button/RegisterButton";

const StudentsTable = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudentsData());
  }, []);

  const showDltStudentModalHandler = (e) => {
    const studentId = e.target.dataset.id;
    dispatch(studentsActions.setStudentId(studentId));
    dispatch(uiActions.toggleStudnetDltModal());
  };

  const showEnrollModalHandler = (e) => {
    const studentId = e.target.dataset.id;
    console.log(studentId);
    dispatch(studentsActions.setStudentId(studentId));
    dispatch(uiActions.toggleStudentEnrollModal());
    dispatch(fetchOneStudent());
  };

  const COLUMNS = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "First name",
      accessor: "firstName",
    },
    {
      Header: "Last name",
      accessor: "lastName",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Registration Date",
      accessor: "registrationDate",
    },
    {
      id: "actions",
      Header: "Actions",
      Cell: ({ row }) => (
        <ButtonGroup
          ID={row.values.id}
          onDelete={showDltStudentModalHandler}
          onEnroll={showEnrollModalHandler}
        />
      ),
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const studentsData = useSelector((state) => state.students.studentsList);

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "assign",
        Header: "Assign",
      },
    ]);
  };

  const tableInstance = useTable(
    {
      columns,
      data: studentsData,
      initialState: { hiddenColumns: ["id"] },
    },
    useGlobalFilter,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;
  return (
    <div className={classes["table-container"]}>
      <div className={classes["table-attributes"]}>
        <div className={classes["filters"]}>
          <SearchInput filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
        <div className={classes["table-actions"]}>
          <RegisterButton onRegister={props.onRegister} />
          <PrintButton />
        </div>
      </div>
      <table className={classes["styled-table"]} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <ArrowDropDownIcon />
                        ) : (
                          <ArrowDropUpIcon />
                        )
                      ) : (
                        <SortIcon />
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")} </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
