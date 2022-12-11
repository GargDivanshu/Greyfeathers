import { useTable } from 'react-table'
import ReactTable from "react-table";
import React from 'react'


export function Table(){
const data = React.useMemo(
    ()=>[
{
    orderId: 'TBM1234567',
    customerName: 'Rangabashiyam Charakesh',
    ordertype: 'Delivery',
    orderStatus: 'new order',
    payment: 'Un-Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
{
    orderId: 'TBM1234567',
    customerName: 'Olga Gaylord',
    ordertype: 'Delivery',
    orderStatus: 'new order',
    payment: 'Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
{
    orderId: 'TBM1234567',
    customerName: 'Monique Metz',
    ordertype: 'Delivery',
    orderStatus: 'Order Updated',
    payment: 'Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
{
    orderId: 'TBM1234567',
    customerName: 'Judy Harris',
    ordertype: 'Take Away',
    orderStatus: 'new order',
    payment: 'Un-Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
{
    orderId: 'TBM1234567',
    customerName: 'Jessie Ziemann',
    ordertype: 'Take Away',
    orderStatus: 'Updated Order',
    payment: 'Un-Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
{
    orderId: 'TBM1234567',
    customerName: 'Rex Gorczany I',
    ordertype: 'Take Away',
    orderStatus: 'Updated Order',
    payment: 'Un-Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
{
    orderId: 'TBM1234567',
    customerName: 'Yvonne Hauck',
    ordertype: 'Delivery',
    orderStatus: 'new order',
    payment: 'Un-Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
{
    orderId: 'TBM1234567',
    customerName: 'Crystal Rolfson',
    ordertype: 'Dine In',
    orderStatus: 'new order',
    payment: 'Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
{
    orderId: 'TBM1234567',
    customerName: 'Tim Mante',
    ordertype: 'Dine In',
    orderStatus: 'Updated order',
    payment: 'Un-Paid',
    Time: '19 Dec 2022 06:28 PM',
    orderLink: 'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
},
], [])


const columns = React.useMemo(
    ()=>[
        {  
            Header: 'Order ID',  
            accessor: 'orderId'  
           },{  
           Header: 'Customer Name',  
           accessor: 'customerName'  
           },
           {  
           Header: 'Order Type',  
           accessor: 'orderType'  
           },{  
           Header: 'Order Status',  
           accessor: 'orderStatus'  
           },{  
            Header: 'Payment',  
            accessor: 'payment'  
            },{  
            Header: 'Time',  
            accessor: 'Time'  
            },{  
            Header: '',  
            accessor: 'orderLink',
            // Cell: (props) => (
            //     // <FontAwesomeIcon
            //     //   icon={faExclamationCircle} some icon with all these attri.
            //     //   className={"icon__" + props.value}
            //     // />
            //   ),
            }, ], [])

            const {
                getTableProps,
                getTableBodyProps,
                headerGroups,
                rows,
                prepareRow,
              }= useTable({ columns, data })

              return (
                <table {...getTableProps()} 
                className="rounded-lg"
                style={{ border: 'solid 1px rgba(15, 25, 26, 0.25)'  }}>
                  <thead>
                    {headerGroups.map(headerGroup => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                          <th
                            {...column.getHeaderProps()}
                            className="rounded-lg"
                            style={{
                              borderBottom: 'solid 3px rgba(15, 25, 26, 0.25)',
                              background: '#ffffff',
                              color: 'rgba(15, 25, 26, 0.5)',
                              fontWeight: 'bold',
                            }}
                          >
                            {column.render('Header')}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                      prepareRow(row)
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map(cell => {
                            return (
                              <td
                                {...cell.getCellProps()}
                                style={{
                                  padding: '10px',
                                  border: 'solid 1px rgba(15, 25, 26, 0.25)',
                                  background: '#FFFF',
                                  
                                }}
                              >
                                {cell.render('Cell')}
                              </td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              )
            
        }
