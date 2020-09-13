import React from 'react';
import { CardHeader, Card, CardBody, CardText, CardGroup } from 'reactstrap';
import { PieChart } from "react-minimal-pie-chart";

export type Props = {
    totalInterests: number,
    amount: number,
    rate: number,
}

const Summary = ({totalInterests, amount, rate} : Props) => (
    <Card>
    <CardHeader>
        <h1> {'Summary'} </h1>
    </CardHeader>
    <CardGroup>
        <CardBody>
            <PieChart
                labelStyle={{
                    fontSize: "10px",
                    fontWeight: "lighter",
                }}
                labelPosition={65}
                label={(data) => data.dataEntry.title}
                animate
                animationDuration={500}
                animationEasing="ease-out" data={[
                { title: 'principal', value: amount, color: '#E38627' },
                { title: 'interest', value: totalInterests, color: '#C13C37' },
            ]}  />
        </CardBody>
        <CardBody>
                <CardText>
                    Amount : {amount}
                </CardText>
                <CardText>
                    Interest Rate: { 100 * rate + ' %'}
                </CardText>
                <CardText>
                    Total interests: {totalInterests}
                </CardText>
                <CardText>
                    Total sum : {amount + totalInterests}
                </CardText>
        </CardBody>
    </CardGroup>
</Card>
)

export default Summary;
