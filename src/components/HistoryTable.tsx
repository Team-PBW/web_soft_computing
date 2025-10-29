"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const HistoryTable = () => {
  return (
    <div className="bg-white w-5/6 p-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Recent</TableHead>
            <TableHead className="text-right">View All</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="flex flex-col">
                <h1>BMTH - Happy Song.wav</h1>
                <p>03 April 2025</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col text-right">
                <h1>Metal</h1>
                <p>0.5 ms</p>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default HistoryTable;
