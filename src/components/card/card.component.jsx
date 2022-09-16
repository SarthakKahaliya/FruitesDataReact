import React from "react";
import "./card.styles.css";

// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.monster;
//     return (
//       <div className="card-container">
//         <img
//           alt={`Monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

const Card = (props) => {
  const {
    id,
    name,
    nutritions: { carbohydrates, protein, fat, calories, sugar },
  } = props.monster;
  return (
    <div className="card-container">
      {/* <img
        alt={`Monster ${name}`}
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
      /> */}
      <h2 className="fruit-name">{name}</h2>
      <table>
        <tbody>
          <tr>
            <td>Carbohydrates:</td>
            <td>{carbohydrates} gm</td>
          </tr>
          <tr>
            <td>Protein:</td>
            <td>{protein} gm</td>
          </tr>
          <tr>
            <td>Fat:</td>
            <td>{fat} gm</td>
          </tr>
          <tr>
            <td>Calories:</td>
            <td>{calories} gm</td>
          </tr>
          <tr>
            <td>Sugar:</td>
            <td>{sugar} gm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Card;
