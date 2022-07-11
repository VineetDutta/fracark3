import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { UseQueryResult } from "react-query";
import { useGetAssets } from "./Hooks";
import { IAssets } from "./Interfaces";

const userList = ["id", "strAssetNum"];

const Assets = () => {
  const [data, setData] = useState<any[]>([]);
  const assetsData = useGetAssets();
  useEffect(() => {
    if (!assetsData.data) {
      setData([]);
      return;
    }
    // const abc = assetsData.data.filter()
  }, [assetsData.data]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {assetsData.data &&
              Object.keys(assetsData.data[0]).map((assetHeader, index) => (
                <TableCell key={index}>{assetHeader}</TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {assetsData.data &&
            assetsData.data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* {Object.keys(row).map((assetRowData, index) => (
                  <TableCell key={index}>
                    {row[assetRowData as keyof IAssets]}
                  </TableCell>
                ))} */}
                <TableCell component="th" scope="row">
                  {row.strAssetNum}
                </TableCell>
                <TableCell align="right">{row.strSerialNum}</TableCell>
                <TableCell align="right">{row.isOnline}</TableCell>
                <TableCell align="right">{row.intMake}</TableCell>
                <TableCell align="right">{row.intModel}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Assets;
