import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Button, Form, Divider, Image } from 'semantic-ui-react'
import { reduxForm, Field, FieldArray, formValueSelector } from 'redux-form'
import { goBack } from 'react-router-redux'
import { fetchRecipe } from '../../actions/index'
import Loading from '../../shared/Loading'
import SemanticUiField from '../../shared/SemanticUiField'

class RecipeEditForm extends Component {

  componentWillMount () {
    const { id } = this.props;
    this.props.fetchRecipe(id)
  }


  cancelEdit = () => {
    this.props.goBack()
  }



  renderIngredients = ({fields, meta: {error, submitFailed}}) => {
    return (
      <div>
        {submitFailed && error && <span>{error}</span>}
        {fields.map((ingredient, idx) => (
          <div key={idx}>
            <Form.Group>
              <Field
                name={`${ingredient}.name`}
                component={SemanticUiField}
                as={Form.Input}
                label="Name"
              />
              <Field
                name={`${ingredient}.amount`}
                component={SemanticUiField}
                as={Form.Input}
                label="Amount"/>
              <Button type="button" onClick={() => fields.remove(idx)} icon="delete" color="red"/>
            </Form.Group>
          </div>
        ))}
        <Button type="button" color="blue" content="Add Ingredient" icon="plus" onClick={() => fields.push({})}/>
      </div>
    )
  }



  render () {
    const {selectedRecipe, imagePath, handleSubmit} = this.props
    if (!selectedRecipe) {
      return <Loading/>
    }

    return (
      <Container fluid>
        <Form onSubmit={handleSubmit}>
          <Button onClick={this.cancelEdit} color="red">Cancel</Button>
          <Button type="submit" color="green">Save</Button>
          <Divider/>
          <Field component={SemanticUiField} as={Form.Input} name="name" label="Name"/>
          <Field component={SemanticUiField} as={Form.Input} name="imagePath" label="Image URL" type="text"/>
          <Image src={imagePath}/>
          <Field component={SemanticUiField} as={Form.TextArea} name="description" label="Description"/>
          <label>Ingredients</label>
          <Divider/>

          <FieldArray name="ingredients" component={this.renderIngredients}/>
        </Form>
      </Container>

    )
  }
}


const ConnectedForm = reduxForm({
  form: 'recipeEdit'
})(RecipeEditForm)

const selector = formValueSelector('recipeEdit');

function mapStateToProps (state) {
  const { selectedRecipe } = state.recipes;
  if (selectedRecipe) {
    return {
      selectedRecipe: selectedRecipe,
      initialValues: {
        ...selectedRecipe
      },
      imagePath: selector(state, 'imagePath')
    }
  }

  return {
    selectedRecipe: selectedRecipe
  }
}


export default connect(mapStateToProps, {goBack, fetchRecipe})(ConnectedForm)