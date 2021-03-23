import React from 'react'
import { useForm } from "react-hook-form";
import { Form, Input, Textarea, Div, Select } from "./formElement"

function ConfigForm() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("pays")); // watch input value by passing the name of it
  
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
          <Div>
            <Input type="text" name="nomPrenom" ref={register({required: true})} placeholder="Prénoms et Noms"  />
            {errors.nomPrenom && <p>Ce champ est requis</p>}
          </Div>

          <Div>
            <Select name="pays" ref={register}>
                <option>Côte d'Ivoire</option>
                <option>Mali</option>
            </Select>
          </Div>
         
         <Div>
            <Input type="email" name="email" ref={register({required: true})} placeholder="Email"/>
            {errors.email && <p>Le champ email est requis</p>}
         </Div>

         <Div>
            <Input type="tel" name="tel" ref={register({required: true})} placeholder="Téléphone"/>
            {errors.tel && <p>Le numéro de téléphone est requis</p>}
         </Div>

         <Div>
            <Input type="text" name="objet" ref={register({required: true})} placeholder="Objets"/>
            {errors.objet && <p>Le champ objet est requis</p>}
         </Div>

         <Div>
            <Textarea name="message" ref={register({required: true})} defaultValue="Message"></Textarea>
            {errors.message && <p>Le champ message est requis</p>}
         </Div>

         <Input type="submit" value="Envoyer"/>
      </Form>
    )
}

export default ConfigForm
