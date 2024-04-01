

import { useState } from 'react'
import { Alert } from 'keep-react'
import { CheckCircle } from 'phosphor-react'

export const Alerta = () => {
  const [showAlert, setShowAlert] = useState(false)
  const onDismiss = () => {
    setShowAlert(!showAlert)
  }
  return (
    <Alert onDismiss={onDismiss} dismiss={showAlert} rounded={true} withBorder={true} color='success'>
      <Alert.Container >
        <Alert.Icon>
          <CheckCircle size={24} color="#0A9952" />
        </Alert.Icon>
        <Alert.Body>
          <Alert.Title>Se ha enviado correctamente</Alert.Title>
          <Alert.Description>
            Se contactaran con usted a la brevedad 
            
          </Alert.Description>
        </Alert.Body>
      </Alert.Container>
    </Alert>
  )
}
