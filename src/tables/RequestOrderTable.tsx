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
import { IoCloseCircle, IoEllipsisHorizontalOutline } from "react-icons/io5";
import Icon24 from "../assets/icons/icon-24.svg?react";
import React from "react";
import { useRecoilValue } from "recoil";
import { ordersRequestState } from "../utils/atom";
import dayjs from "dayjs";
import UniqueOrderRequest from "../views/dashboard/UniqueOrderRequest";
import SearchRequestOrder from "../searching/RequestOrder";
import { OrderRequest, RequestStatus } from "../types/orderRequest";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import ArrowSwapHorizontal from "../assets/icons/arrow-swap-horizontal.svg?react";
import SecurityIcon from "../assets/icons/security.svg?react";

const RequestOrderTable = ({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}) => {

  const requests = useRecoilValue(ordersRequestState);
  const headCells = [
    {
      title: "Package(s) Image",
      value: "image",
    },
    {
      title: "Request ID",
      value: "requestId",
    },
    {
      title: "Request Status",
      value: "status",
    },
    {
      title: "Request Date",
      value: "date",
    },
    {
      title: "Actions",
      value: null,
    },
  ];

  const [selected, setSelected] = React.useState<any[]>([]);
  const [orderBy, setOrderBy] = React.useState();
  type Order = "asc" | "desc";
  const [order, setOrder] = React.useState<Order>("asc");
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const [page, setPage] = React.useState(0);

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
    order: Order,
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
    _: any,
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
      stableSort(requests, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  const [statusModalData, setStatusModalData] =
    React.useState<RequestStatus | null>(null);

  const navigate = useNavigate();

  const [currentRequest, setCurrentRequest] =
    React.useState<OrderRequest | null>(null);

  return (
    <>
      <SearchRequestOrder
        onAdd={() => {
          navigate("/dashboard/shop-for-me/requests?request=order");
        }}
      />

      <Modal
        open={statusModalData !== null}
        onClose={() => {
          setStatusModalData(null);
        }}
        className="flex bg-[#625B7180] flex-col items-center justify-center"
      >
        <div
          className="bg-[#eee8f4] border w-[40%] flex flex-col gap-5 rounded-[20px] p-6"
          style={{
            boxShadow: "0px 4px 4px 0px #0000004D",
          }}
        >
          <Title title="Request Status" />
          <div className="text-text-variant mdd:text-[24px] bg-white border-[#CAC4D0] border w-full text-center py-4 rounded-[20px] text-[19px] leading-[32px]">
            Request ID:&nbsp;
            <b className="leading-[36px]">R78667</b>
          </div>
          <div>
            {statusModalData === "Responded"
              ? "Your request has been responded to. Kindly proceed to checkout."
              : "Your request has not be responded to yet. Kindly check back later."}
          </div>
          <div className="flex justify-end gap-4">
            {statusModalData === "Not Responded" ? (
              <button
                onClick={() => {
                  setStatusModalData(null);
                }}
                className="rounded-[100px] text-white flex items-center gap-1 px-14  justify-center py-[8px] sm:py-2 font-medium bg-text-secondary"
              >
                <IoCloseCircle size={22} />
                Close
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    setStatusModalData(null);
                  }}
                  className="text-[#6750A4]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    navigate("/dashboard/shop-for-me/requests/place-order");
                  }}
                  className="rounded-[100px] text-white flex items-center gap-2 px-4 justify-center py-[8px] sm:py-2 font-medium bg-text-secondary"
                >
                  <SecurityIcon />
                  Proceed to checkout
                </button>
              </>
            )}
          </div>
        </div>
      </Modal>

      <Modal
        open={currentRequest !== null}
        onClose={() => {
          setCurrentRequest(null);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="overflow-x-hidden bg-[#625B7180]"
      >
        <div className="w-[90%] duration-1000 transition-all mx-auto">
          <div className="my-6 border-0 ring-0 outline-none">
            <UniqueOrderRequest
              onProceed={() => {
                // setCurrentShow("place");
              }}
              onBack={() => {
                setShow(false);
              }}
              request={currentRequest!}
            />
          </div>
        </div>
      </Modal>
      <div className="bg-white py-4 px-2 max-w-[calc(100vw-3.5rem)] md:max-w-[calc(100vw-20rem)] overflow-x-scroll rounded-[20px]">
        <TableContainer  className="min-w-[50rem] max-h-[50rem]">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={
                      selected.length > 0 && selected.length < requests.length
                    }
                    checked={
                      requests.length > 0 && selected.length === requests.length
                    }
                    onChange={(event) => {
                      if (event.target.checked) {
                        const newSelecteds = requests.map(
                          (request) => request.requestId
                        );
                        setSelected(newSelecteds);
                        return;
                      }
                      setSelected([]);
                    }}
                  />
                </TableCell>
                {headCells.map((headCell, index) => (
                  <TableCell
                    key={index}
                    align="left"
                    padding="none"
                    sortDirection={orderBy === headCell.value ? order : false}
                  >
                    <TableSortLabel
                      hideSortIcon={index === 0 || index === 4}
                      direction={orderBy === headCell.value ? order : "asc"}
                      active={index !== 0 && index !== 4}
                      IconComponent={
                        orderBy === headCell.value
                          ? undefined
                          : ArrowSwapHorizontal
                      }
                      onClick={createSortHandler(headCell.value)}
                    >
                      <span className="mr-5"> {headCell.title}</span>
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((request: any, index) => {
                let isSelected = selected.includes(request.requestId);
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    selected={isSelected}
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={index}
                    onClick={() => {
                      setSelected(
                        isSelected
                          ? selected.filter(
                              (selected) => selected !== request.requestId
                            )
                          : [...selected, request.requestId]
                      );
                    }}
                    className="cursor-pointer"
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={isSelected} color="primary" />
                    </TableCell>
                    <TableCell
                      onClick={() => {
                        setCurrentRequest(request);
                      }}
                    >
                      <img
                        src={request.image}
                        className="w-[120px] object-cover rounded-[10px] h-[60px]"
                      />
                    </TableCell>
                    <TableCell
                      onClick={() => {
                        setCurrentRequest(request);
                      }}
                    >
                      <span className="text-[#1C1B1F] font-[500] text-[16px] tracking-[0.15px] leading-[24px]">
                        {request.requestId}
                      </span>
                    </TableCell>
                    <TableCell
                      onClick={() => {
                        setStatusModalData(request.status);
                      }}
                    >
                      <div
                        className={`${
                          request.status === "Not Responded"
                            ? "bg-[#CAC4D0] text-[#49454F]"
                            : "bg-[#DF5000] text-white"
                        } rounded-[10px] font-[500] text-[14px] tracking-[0.1px] leading-[20px] px-2 py-1`}
                      >
                        {request.status}
                      </div>
                    </TableCell>
                    <TableCell
                      onClick={() => {
                        setCurrentRequest(request);
                      }}
                    >
                      <span className="text-[#1C1B1F] tracking-[0.1px] font-[500] text-[14px]">
                        {dayjs(request.date).format("DD-MM-YYYY HH:mm")}
                      </span>
                    </TableCell>
                    <TableCell
                      onClick={() => {
                        setCurrentRequest(request);
                      }}
                    >
                      <IoEllipsisHorizontalOutline color="#B3261E" size={25} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          <TablePagination
            labelRowsPerPage="Items per page:"
            rowsPerPageOptions={[1, 2, 3]}
            className="py-3"
            SelectProps={{
              className:
                "border-[#79747E] border rounded-[15px] py-2 px-1 text-[#1C1B1F]",
            }}
            count={requests.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(_, page) => {
              setPage(page);
            }}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(parseInt(event.target.value, 10));
              setPage(0);
            }}
            backIconButtonProps={{
              sx: {
                border: 2,
                borderRadius: 10,
                borderColor: "#6750A4", // Set border color to red
                color: "#6750A4", // Set border color to red
                "&:disabled": {
                  borderColor: "#CAC4D0", // Set border color to gray when disabled
                },
                cursor: "pointer",
              },
              style: {
                padding: 0,
              },
              className: "rounded-[10px] mr-3",
            }}
            nextIconButtonProps={{
              sx: {
                border: 2,
                borderRadius: 10,
                borderColor: "#6750A4", // Set border color to red
                color: "#6750A4", // Set border color to red
                "&:disabled": {
                  borderColor: "#CAC4D0", // Set border color to gray when disabled
                },
                cursor: "pointer",
              },
              style: {
                padding: 0,
              },
              className: "rounded-[10px]",
            }}
          />
          <p className="shadow-sm rounded-full fixed bottom-10 right-10 bg-text-secondary text-white px-3 py-2 gap-2 tracking-[0.1px] text-[14px] font-medium flex items-center">
            <Icon24 />
            <span>need help?</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default RequestOrderTable;
