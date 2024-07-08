import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { BarLoader } from 'react-spinners'

const Dashboard = () => {
  return (
    <div>{true && <BarLoader width={"100%"} color="#36d7d7"/>}
    <div></div>
  <Card>
  <CardHeader>
    <CardTitle>Links Created</CardTitle>
  </CardHeader>
  <CardContent>
    <p>0</p>
  </CardContent>
  </Card>
  <Card>
  <CardHeader>
    <CardTitle>Total Clicks</CardTitle>
  </CardHeader>
  <CardContent>
    <p>0</p>
  </CardContent>
  </Card>



    </div>
  )
}

export default Dashboard
