import {useState, type FormEvent, useEffect } from 'react';


const paymentOptions = [
  {
    id: 1,
    name: '現金',
    inputId: 'cash'
  },
  {
    id: 2,
    name: '信用卡',
    inputId: 'credit'
  },
  {
    id: 3,
    name: 'ATM 轉帳',
    inputId: 'ATM'
  },
  {
    id: 4,
    name: '超商繳費',
    inputId: 'convenience_store'
  }
]

function Form() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [payment , setPayment] = useState<string>('');
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [isReset, setIsReset] = useState(false);

  const resetForm = () => {
      setIsReset(true);
      setEmail('');
      setPassword('');
      setPayment('');
      setCheckbox(false);
  }

  const formSumit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const submitData = {
        email,
        password,
        payment,
      }
      console.log(submitData);
  }

  useEffect(() => {
    if(isReset) {
      setIsReset(false);
    }
  }, [isReset])

  return (
    <>
      <form onSubmit={(event) => formSumit(event)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => setEmail(event?.target.value)} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" value={password} className="form-control" id="exampleInputPassword1" onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div className="d-flex gap-2">
          {
            paymentOptions.map((item) => {
              return (
                <div className="mb-3 form-check" key={item.id}>
                  <input className="form-check-input" checked={item.name === payment && !isReset} value={item.name} type="radio" name="flexRadioDefault" id={item.inputId} onChange={(event) => setPayment(event.target.value)} />
                  <label className="form-check-label" htmlFor={item.inputId}>
                    {item.name}
                  </label>
                </div>
              )
            })
          }
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" checked={checkbox} onChange={e => setCheckbox(e.target.checked)} className="form-check-input" id="exampleCheck1" required />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary me-5">Submit</button>
        <button type="button" className="btn btn-outline-primary" onClick={() => resetForm()}>Reset</button>
      </form>
    </>
  )
}

export default Form
