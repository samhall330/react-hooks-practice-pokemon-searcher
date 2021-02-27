import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokemon, setPokemon}) {
  const [formData, setFormData] = useState({name: null, hp: null, frontUrl: null, backUrl: null})
  
  function updateFormState(formKey, formValue){
    const updatedFormData = {...formData}
      updatedFormData[formKey] = formValue
      setFormData(updatedFormData)
  }
  
  function addPokemon(){
    const newPokemonObject = {name: formData.name, hp: formData.hp, sprites: {front: formData.frontUrl, back: formData.backUrl}}
      fetch("http://localhost:3001/pokemon",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
        body: JSON.stringify(newPokemonObject)
      })
      .then(response => response.json())
      .then((newPokemon) => {
        const updatedPokemon = [...pokemon, newPokemon]
        setPokemon(updatedPokemon)
      })
  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...");
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
