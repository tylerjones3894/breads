const React = require('react')
const baker = require('../controllers/bakers_controller')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        <h3>Bakers</h3>
        <ul>
            {
                bakers.map((baker), => {
                    return (
                        <li key={baker._id}>
                            <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                        </li>
                    )
                })
            }
        </ul>
        <div className="newButton">
            <a href="/breads/new"><button>Add a new bread</button></a>
        </div>
        {/* <p>I have {breads[0].name} bread!</p> */}
        <ul>
            {
                breads.map((bread, index)=> {
                    return (
                    <li key={bread.id}>
                        <a href={`/breads/${bread._id}`}>
                            {bread.name}
                        </a>
                        <div>{bread.getBakedBy()}</div>
                    </li>
                    )
                })       
            }
        </ul>
      </Default>
    )
}

module.exports = Index
