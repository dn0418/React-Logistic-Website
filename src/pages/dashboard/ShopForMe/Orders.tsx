import React, { useEffect } from "react";
import NoOrder from "./NoOrder";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { IoCloseCircle } from "react-icons/io5";
import {
  Checkbox,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import Icon24 from "../../../assets/icons/icon-24.svg?react";
import SecurityIcon from "../../../assets/icons/security.svg?react";
import Title from "../../../components/Title";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import dayjs from "dayjs";
import ArrowSwapHorizontal from "../../../assets/icons/arrow-swap-horizontal.svg?react";
import { ordersState } from "../../../utils/atom";
import { Order, ShippingStatus } from "../../../types/order";
import SearchRequestOrder from "../../../searching/RequestOrder";

const Orders: React.FC = () => {
  useEffect(() => {
    document.title = "Shop For Me | Orders";
  }, []);

  const orders = useRecoilValue(ordersState);

  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [order, setOrder] = React.useState<any>({});
  const [orderBy, setOrderBy] = React.useState("date");
  const [selected, setSelected] = React.useState<any>([]);

  const headCells = [
    {
      title: "Order Date",
      value: "orderDate",
    },
    {
      title: "Tracking ID",
      value: "trackingId",
    },
    {
      title: "Shipping Status",
      value: "shippingStatus",
    },
    {
      title: "Shop For Me Status",
      value: "shopForMeStatus",
    },
    {
      title: "Shipping Cost",
      value: "shippingCost",
    },
    {
      title: "Actions",
      value: null,
    },
  ];

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator<Key extends keyof any>(
    order: any,
    orderBy: any
  ): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
  ) => number {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort<T>(array: any[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: any
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const createSortHandler =
    (property: any) => (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };

  const visibleRows = React.useMemo(
    () =>
      stableSort(orders, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  const [statusModalData, setStatusModalData] =
    React.useState<ShippingStatus | null>(null);

  return orders.length > 0 ? (
    <>
      <SearchRequestOrder 
        onAdd={() => {}}
      />
    </>
  ) : (
    <NoOrder
      desc={
        "You have not placed any shop for me order before, would you like to create a new order?"
      }
    />
  );
};

export default Orders;
