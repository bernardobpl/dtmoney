import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from "../../hooks/useTransactions";
import { toMoney } from "../../toMoney";
import { Container } from "./styles";

export function Summary() {
  const {transactions} = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type==='deposit'){
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Gain</p>
          <img src={incomeImg} alt="Gain" />
        </header>
        <strong>{toMoney(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <img src={outcomeImg} alt="Expenses" />
        </header>
        <strong>- {toMoney(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{toMoney(summary.total)}</strong>
      </div>
    </Container>
  );
}