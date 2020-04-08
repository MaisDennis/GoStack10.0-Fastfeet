import React, { useRef, PureComponent } from 'react';
import { RNCamera } from 'react-native-camera';
import { useSelector } from 'react-redux';

import { Header, Container, CameraButton, Div4 } from '../styles';
import api from '~/services/api';

export default function Confirm() {
  const id = useSelector(state => state.auth.data.id);
  const camera = useRef(null);

  async function takePicture() {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true,
        forceUpOrientation: true,
        fixOrientation: true,
      };
      const data = await camera.current.takePictureAsync(options);
      // console.tron.log(data.uri);
      // console.tron.log(data);

      // eslint-disable-next-line no-undef
      const formData = new FormData();
      formData.append('signature', {
        uri: data.uri,
        // name: `Signature${data.uri}.jpg`,
        name: `${data.uri}_${'1'}.jpg`,
        type: 'image/*',
      });

      const response = await api.post('signatures', formData);

      // eslint-disable-next-line camelcase
      const signature_id = response.data.id;
      // console.tron.log(id);

      await api.put(`deliveryaccess/${id}`, {
        signature_id,
      });
      // console.tron.log(test);
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Div4>
          <RNCamera
            ref={camera}
            style={{
              top: 50,
              height: 500,
              marginRight: 20,
              marginLeft: 20,
              marginBottom: 20,

              // height: 200,
              // width: 350,
            }}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.on}
            captureAudio={false}
          />
          <CameraButton onPress={() => takePicture()}>Enviar</CameraButton>
        </Div4>
      </Container>
    </>
  );
}
