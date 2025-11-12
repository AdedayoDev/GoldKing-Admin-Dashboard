"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import data from "@/data/Analytics";

const AnalyticsChart = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Analytics for this year</CardTitle>
          <CardDescription>Views Per Month</CardDescription>
          <CardContent>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart width={1100} height={300} data={data}>
                  <Line type="monotone" dataKey="uv" stroke="#888" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </>
  );
};

export default AnalyticsChart;
