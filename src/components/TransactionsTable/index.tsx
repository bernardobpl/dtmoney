import { useTransactions } from "../../hooks/useTransactions";
import { toMoney } from "../../toMoney";
import { Container } from "./styles";

export function TransactionsTable(){
  const {transactions} = useTransactions()
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {toMoney(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}