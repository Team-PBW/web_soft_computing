"use client";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";

const HistoryTable = () => {
  return (
    <div className="relative w-5/6">
      <div className="rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="text-lg font-semibold tracking-tight text-gray-900">Recent Predictions</h2>
          <Link href="#" className="text-sm font-medium text-blue-600 transition hover:text-blue-700">
            View all
          </Link>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <Table>
          <TableBody>
            <TableRow className="group transition hover:bg-gray-50/60">
              <TableCell className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">BMTH – Happy Song.wav</span>
                  <span className="mt-1 text-xs text-gray-500">03 April 2025</span>
                </div>
              </TableCell>

              <TableCell className="px-6 py-4 text-right">
                <div className="flex flex-col items-end gap-1">
                  <span className="inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700">Metal</span>
                  <span className="text-xs font-mono text-gray-500">0.5 ms</span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default HistoryTable;
