import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
                    <h2 className="dsmeta-sales-title">Vendas</h2>
                    <div>
                        <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => {}}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                        </div>
                    <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => {}}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                    </div>
                </div>


                    <div>
                        <table className="dsmeta-sales-table">
                            <thead>
                                <tr>
                                    <th className="show992">ID</th>
                                    <th className="show576">Data</th>
                                    <th>Vendedor</th>
                                    <th className="show992">Visitas</th>
                                    <th className="show992">Vendas</th>
                                    <th>Total</th>
                                    <th>Notificar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="show992">#675</td>
                                    <td className="show576">08/07/2022</td>
                                    <td>Anakin</td>
                                    <td className="show992">15</td>
                                    <td className="show992">11</td>
                                    <td>R$ 55300.00</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container">
                                            <NotificationButton />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show992"> #465</td>
                                    <td className="show576">08/07/2022</td>
                                    <td>Luke</td>
                                    <td className="show992">20</td>
                                    <td className="show992">18</td>
                                    <td>R$ 55300.00</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container">
                                            <NotificationButton />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show992">#890</td>
                                    <td className="show576">08/07/2022</td>
                                    <td>Padme</td>
                                    <td className="show992">13</td>
                                    <td className="show992">12</td>
                                    <td>R$ 55300.00</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>


                </div>
    )
}

export default SalesCard