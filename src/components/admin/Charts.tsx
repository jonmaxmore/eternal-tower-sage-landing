
'use client'

import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

export function LineChartWrapper({ data }: { data: any[] }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f1f5f9' }}
                    itemStyle={{ color: '#f1f5f9' }}
                />
                <Legend />
                <Line type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="signups" stroke="#10b981" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export function BarChartWrapper({ data }: { data: any[] }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="country" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f1f5f9' }}
                    cursor={{ fill: '#334155', opacity: 0.4 }}
                />
                <Legend />
                <Bar dataKey="users" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )
}
