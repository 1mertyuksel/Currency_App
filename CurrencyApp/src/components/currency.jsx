import '../css/currency.css';
import { HiArrowSmRight } from "react-icons/hi";
function currency() {
  return (
    <div className='currency-div'>
      <div style={{ marginTop:'0px',fontFamily:'arial', backgroundColor:'black',color:'#fff',width:'100%',textAlign:'center'}}>
        <h3>DÖVİZ KURU UYGULAMASI</h3>
      </div>
        <div style={{ marginTop:'25px'}}>
        <input type="number" className='amount' />
        <select className="from-currency-option">
            <option>USD</option> 
            <option>EUR</option> 
            <option>TL</option> 
        </select>
        <HiArrowSmRight style={({ fontSize:'32px' , marginRight:'10px'})} />
        <select className="to-currency-option">
            <option>TL</option> 
            <option>EUR</option> 
            <option>USD</option> 
        </select>

        <input type="number" className='result' />

        </div>
      <div>
      <button className='exchange-button'>Çevir</button>

      </div>
    </div>
  )
}

export default currency
