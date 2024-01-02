import { createPortal } from 'react-dom';




function App() {


  return <>
    <h1>React.js : portails</h1>
    <div
      style={{
        height: 300,
        overflowY: 'scroll',
        background: '#EEE',
        margin: 20,
        position: 'relative'
      }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices egestas ultricies. Quisque ut luctus nisi, eget condimentum nisi. Aenean sagittis scelerisque luctus. Proin dapibus fringilla sem dignissim porttitor. Morbi ut lacus tortor. Nulla at elit mauris. Curabitur vel erat felis. Aenean laoreet nisi ac quam mollis elementum in vel quam. In congue felis erat, a dictum felis hendrerit eget.
      </p>
      <p>
        Morbi vulputate, purus vel ornare ornare, eros augue pellentesque nibh, id rutrum ligula justo sit amet est. Curabitur posuere ante sapien. Vivamus eget lectus sem. Mauris dolor libero, scelerisque nec ligula eu, iaculis pretium turpis. Integer convallis dolor vel felis porta vehicula. Sed eu enim placerat risus imperdiet porta eget eget neque. Vivamus convallis justo ut dictum finibus. Mauris aliquet turpis eget nibh pellentesque, eu efficitur sapien condimentum. Donec eget ipsum ac erat lacinia placerat.
      </p>
      <p>
        Pellentesque eget aliquam neque. Nullam blandit lorem turpis, at volutpat libero accumsan eu. Quisque eu eros eu nulla fermentum convallis. Nullam leo erat, elementum vel pharetra non, varius sed elit. Donec quis viverra sapien. Nunc sagittis dignissim purus lacinia dignissim. Suspendisse molestie, ligula sit amet auctor feugiat, arcu est suscipit erat, in sodales risus justo eget arcu. Aliquam et ipsum lectus. Aenean aliquam porta odio, et posuere metus commodo vel. Fusce a ligula vitae est gravida volutpat at quis ex. Nullam finibus ut sem et laoreet. Integer ac posuere sapien, eu volutpat ipsum. Praesent laoreet volutpat sem, eget iaculis ipsum imperdiet vel.
      </p>
      <Modal />
    </div>
  </>
}

function Modal() {
  return createPortal(<div
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      padding: 10,
      border: 'solid 1px grey',
      background: '#FFF',
    }}>
    Je suis une modale
  </div>, document.body)
}

export default App

