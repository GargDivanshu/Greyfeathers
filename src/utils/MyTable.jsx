import React, {useMemo} from 'react'
import ReactDOM from "react-dom/client";
import {BiLinkExternal} from 'react-icons/bi'
import {Link} from 'react-router-dom'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export function MyTable({dataFilter}){
const data = [{
    orderId: 'TBM1234561',
    table: '1',
    customerName: 'Rangabashiyam Charakesh',
    ordertype: 'Delivery',
    orderStatus: 'new order',
    payment: 'Un-Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
{
    orderId: 'TBM1234562',
    table: '10',
    customerName: 'Olga Gaylord',
    ordertype: 'Delivery',
    orderStatus: 'new order',
    payment: 'Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
{
    orderId: 'TBM1234563',
    table: '5',
    customerName: 'Monique Metz',
    ordertype: 'Delivery',
    orderStatus: 'Order Updated',
    payment: 'Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
{
    orderId: 'TBM1234564',
    table: '8',
    customerName: 'Judy Harris',
    ordertype: 'Take Away',
    orderStatus: 'new order',
    payment: 'Un-Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
{
    orderId: 'TBM1234565',
    table: '12',
    customerName: 'Jessie Ziemann',
    ordertype: 'Take Away',
    orderStatus: 'Updated Order',
    payment: 'Un-Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
{
    orderId: 'TBM1234566',
    table: '22',
    customerName: 'Rex Gorczany I',
    ordertype: 'Take Away',
    orderStatus: 'Updated Order',
    payment: 'Un-Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
{
    orderId: 'TBM1234567',
    table: '7',
    customerName: 'Yvonne Hauck',
    ordertype: 'Delivery',
    orderStatus: 'new order',
    payment: 'Un-Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
{
    orderId: 'TBM1234568',
    table: '11',
    customerName: 'Crystal Rolfson',
    ordertype: 'Dine In',
    orderStatus: 'new order',
    payment: 'Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
{
    orderId: 'TBM1234569',
    table: '8',
    customerName: 'Tim Mante',
    ordertype: 'Dine In',
    orderStatus: 'Updated order',
    payment: 'Un-Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
}]

const memoizedData = useMemo(() => {
    return data.map(datas => {
      return datas
    })
  }, [data])

  const arr = dataFilter(memoizedData)

            
              return (
                <TableContainer className="no-scrollbar max-w-screen-md ">
                <Table variant='simple'
                className="w-full border-2 text-xs border-[#0f191a80] rounded-sm flex flex-col" >
                <Thead>
                <Tr className="grid grid-cols-8 p-3 px-2 justify-around items-center break-all text-[#0f191a80] w-full rounded-lg">
                    <Th className="">Order ID</Th>
                    <Th>Table No</Th>
                    <Th>Customer Name</Th>
                    <Th className="flex flex-row justify-around">Order Type 
                    <div><svg 
                    className="my-auto mt-2 text-[#0f191a80]"
                    width="15" height="9" viewBox="0 0 15 9" fill="#0f191a80" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.92 0.68H6.68999H1.07999C0.119992 0.68 -0.360007 1.84 0.319993 2.52L5.49999 7.7C6.32999 8.53 7.67999 8.53 8.50999 7.7L10.48 5.73L13.69 2.52C14.36 1.84 13.88 0.68 12.92 0.68Z" fill="#292D32"/>
                    </svg></div></Th>

                    <Th className="flex flex-row justify-around">Order Status
                    <div><svg 
                    className="my-auto mt-2 text-[#0f191a80]"
                    width="15" height="9" viewBox="0 0 15 9" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.92 0.68H6.68999H1.07999C0.119992 0.68 -0.360007 1.84 0.319993 2.52L5.49999 7.7C6.32999 8.53 7.67999 8.53 8.50999 7.7L10.48 5.73L13.69 2.52C14.36 1.84 13.88 0.68 12.92 0.68Z" fill="#292D32"/>
                    </svg></div></Th>

                    <Th>Payment</Th>
                    <Th>Time</Th>
                    <Th>View Order</Th>
                </Tr>
                </Thead>
                <Tbody>
                {arr.map((data) => (
                <Tr 
                borderTop='1px' borderBottom='1px' borderColor='gray.200'
                key={data.orderId}
                className={` grid grid-cols-8 p-3 px-2 text-xs font-semibold justify-center items-center text-[#0f191a80] w-full`}>
                <Td borderColor='none' border='0px' className="text-[#4361EE]">{data.orderId}</Td>
                    <Td borderColor='none' border='0px' className="text-[#0F191A]">{data.table}</Td>
                    <Td borderColor='none' border='0px' className="whitespace-normal text-[#0F191A]">{data.customerName}</Td>
                    <Td borderColor='none' border='0px' className={`flex flex-row justify-around 
                    ${(data.ordertype.toLowerCase() === 'dine in') ? 'text-[#4361EE]' : (data.ordertype.toLowerCase() === 'take away') ? 'text-[#F7B801]' : 'text-[#E63946]'}`}>{data.ordertype}</Td>
                    <Td borderColor='none' border='0px'>
                    <div className={`flex flex-row justify-around rounded-lg px-[3rem] py-[3px]
                    ${(data.orderStatus.toLowerCase() === 'new order') ? 'text-[#EB5E28] bg-[#eb5e281a]' : 'text-[#6F2DBD] bg-[#6f2dbd1a]'}`}>{data.orderStatus} </div> </Td>

                    <Td borderColor='none' border='0px'>
                    <div className={`flex flex-row justify-around rounded-lg px-[3rem] py-[3px]
                    ${(data.payment.toLowerCase() === 'paid') ? 'text-[#2FBF71] bg-[#2fbf711a]' : 'text-[#D90429] bg-[#d904291a]'}`}>{data.payment}</div></Td>
                    <Td borderColor='none' border='0px' className="whitespace-normal text-[#0F191A]">{data.Time}</Td>
                    <Td borderColor='none' border='0px' className="items-center mx-auto">
                    <a href={data.orderLink}>
                    {<BiLinkExternal
                        fontSize={20} className="text-[#4361EE] cursor-pointer"
                    />}
                    </a></Td>
                    </Tr>
                ))
                }
                </Tbody>
                </Table>
                </TableContainer>
              )
            
        }
