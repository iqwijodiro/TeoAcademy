<template>
  <v-container fluid>
    <v-row>
      <!-- <v-col> -->
      <v-card light width="100%" class="pa-5">
        <v-container>
          <h3 class="red-font text-center text-uppercase">
            Política de Privacidad
          </h3>
          <p>
            Menores de edad
            Si es menor de edad no proporcione sus datos personales. Cualquier persona que los proporcione asumiremos que es mayor de edad.
          </p> <br>
          <h4>Algunos principios que debe conocer</h4>
          <p>Para TEO ACADEMY es una prioridad el respeto y la protección de los datos personales de los usuarios. Como Usuario debe saber que sus derechos están garantizados.</p>
          <p>Nos esforzamos en crear un espacio seguro y confiable y por eso compartimos nuestros principios respecto a su privacidad:</p>
          <ul>
            <li>La información personal que solicitamos es estrictamente aquella necesaria para prestar los servicios que nos requiera.</li>
            <li>No compartimos su información con nadie, excepto para cumplir la ley o en el caso de que se cuente con su autorización expresa.</li>
            <li>No utilizamos sus datos personales con una finalidad distinta a la expresada en esta política de privacidad.</li>
          </ul>

          <p>Esta Política de Privacidad podrá variar en función de las exigencias legislativas o de autorregulación, por lo que le aconsejamos que la visite periódicamente. Será aplicable en el caso de los usuarios que decidan rellenar cualquiera de nuestros formularios donde se recabe datos de carácter personal.<br></p>

          <h4>Regulaciones legales a las que se acoge</h4>
          <p>TEO ACADEMY se acoge a las exigencias del la Ley de Protección de la Persona frente al tratamiento de sus datos personales (Ley Nº 8968) y al Reglamento a la Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales (N° 37554-JP), ambos de la República de Costa Rica.</p>

          <p>A efectos de lo previsto en la Ley de Protección de la Persona frente al tratamiento de sus datos personales (Ley Nº 8968) y su Reglamento (N° 37554-JP), los datos personales que envíe a través de cualquiera de nuestros formularios del portal recibirán el tratamiento de datos de “Usuarios de TEO ACADEMY”.</p>
          <p>Para el tratamiento de datos de los usuarios del portal se han implementado todas las medidas técnicas y organizativas de seguridad, establecidas en la legislación vigente.</p>

          <h4>¿Cómo hemos obtenido sus datos?</h4>
          <p>Los datos personales que tratamos en TEO ACADEMY proceden del registro en cualquiera de los formularios de nuestro sitio web.</p>

          <h4>¿Cuáles son sus derechos al facilitar sus datos?</h4>
          <p>Los interesados podrán acceder a sus datos personales, así como a solicitar la rectificación de datos inexactos o, en su caso, a solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. TEO ACADEMY dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones. También podrán solicitar la portabilidad de sus datos.</p>

          <h4>Datos de contacto para ejercer sus derechos: </h4>
          <ul>
            <li>Dirección: SEGO Technology, S.A., Edificio Gran Campo, Oficina 6, Sabana Norte, San José, Costa Rica.</li>
            <li>Dirección electrónica: servicios@teo-academy.com</li>
          </ul>
          <h4>¿Con que finalidad tratamos sus datos personales? </h4>
          <p>
            Cuando un usuario se registra en cualquiera de los formularios, está facilitando información de carácter personal de la que es responsable TEO ACADEMY. Esta información puede incluir datos de carácter personal como pueden ser su dirección IP, país, nombre, apellido, dirección de correo electrónico, número de teléfono, otros.
            Al facilitar esta información, el usuario da su consentimiento para que su información sea recopilada y tratada por TEO ACADEMY a efectos de la finalidad de cada formulario de la página de aterrizaje.
          </p>
          <p>Existen otras finalidades por la que se tratan sus datos personales:</p>
          <ul>
            <li>Para garantizar el cumplimiento de la ley aplicable. Esto puede incluir el desarrollo de herramientas y algoritmos que ayudan a TEO ACADEMY a garantizar la confidencialidad de los datos personales que recoge.</li>
            <li>Para apoyar y mejorar los servicios que ofrecemos.</li>
            <li>A efectos de realizar estudios estadísticos.</li>
          </ul>
          <p>TEO ACADEMY, no vende, alquila ni cede datos de carácter personal que puedan identificar al usuario, ni lo hará en el futuro, a terceros sin el consentimiento previo.</p>

          <h4>Alojamiento de los datos</h4>
          <p>Le informamos que los datos que nos facilita estarán en los servidores de SEGO TECHNOLOGY (Proveedor tecnológico de TEO ACADEMY) ubicados en el data center de la empresa Amazon Web Services, proveedor de servicios de internet de SEGO TECHNOLOGY.</p>

          <h4>Legitimación para el tratamiento de sus datos</h4>
          <p>La base legal para el tratamiento de sus datos es: el consentimiento del titular de los datos. Para registrarse en cualquiera de los formularios de TEO ACADEMY se requiere el consentimiento con esta política de privacidad.</p>

          <h4>¿Por cuánto tiempo se conservan sus datos?</h4>
          <p>Los datos personales proporcionados se conservarán mientras exista un interés mutuo para mantener el fin del tratamiento y cuando ya no sea necesario para tal fin, se suprimirán con medidas de seguridad adecuadas para garantizar la seudonimización de los datos o la destrucción total de los mismos.</p>

          <h4>Cookies</h4>
          <v-dialog
            v-model="cookies"
          >
            <template #activator="{ on, attrs }">
              <p>En la página web de TEO ACADEMY utilizamos cookies. Consulte nuestra <a v-bind="attrs" class="text-decoration-underline red-font" v-on="on">Política de Cookies</a>  para más información.</p>
            </template>
            <v-card>
              <v-toolbar
                flat
                dense
                app
                color="transparent"
              >
                <v-spacer />
                <v-btn
                  icon
                  @click="cookies = false"
                >
                  <v-icon size="30" class="icon gray-light-font">
                    mdi-close-circle-outline
                  </v-icon>
                </v-btn>
              </v-toolbar>
              <cookies />
            </v-card>
          </v-dialog>

          <h4>Secreto y seguridad de los datos</h4>
          <p>TEO ACADEMY se compromete a usar y tratar los datos personales de los usuarios registrados, respetando su confidencialidad y de acuerdo con la finalidad de los mismos, así como a dar cumplimiento a su obligación de guardarlos y adoptar las medidas para evitar la alteración, pérdida, tratamiento o acceso no autorizado, de conformidad con lo establecido en la normativa vigente de protección de datos.</p>

          <h4>Exactitud y veracidad de los datos</h4>
          <p>Como usuario registrado, es el único responsable de la veracidad y corrección de los datos que nos remita exonerando a TEO ACADEMY de cualquier responsabilidad al respecto. Los usuarios registrados garantizan y responden, en cualquier caso, de la exactitud, vigencia y autenticidad de los datos personales facilitados y se comprometen a mantenerlos debidamente actualizados. El usuario acepta proporcionar información completa y correcta en el formulario de registro.</p>

          <h4>Correos comerciales</h4>
          <p>Con la información suministrada a través de los distintos formularios, el Usuario da su consentimiento expreso para recibir correos electrónicos con información de carácter general de TEO ACADEMY que puede incluir notificación de actualizaciones, boletines, promociones, ofertas especiales, información general de productos y servicios.</p>

          <h4>Aceptación y consentimiento</h4>
          <p>El usuario registrado declara haber sido informado de las condiciones sobre protección de datos de carácter personal, aceptando y consintiendo el tratamiento de los mismos por parte de TEO ACADEMY en la forma y para las finalidades indicadas en esta política de privacidad.</p>

          <h4>Ley aplicable y jurisdicción</h4>
          <p>
            La ley aplicable en caso de disputa o conflicto de interpretación de los términos que conforman esta Política de Privacidad, así como cualquier cuestión relacionada con los servicios de la presente web, será la ley costarricense, enunciando expresamente las partes al fuero que les corresponda, y sometiéndose a los Juzgados y Tribunales de San José, Costa Rica.
          </p>
        </v-container>
      </v-card>
      <!-- </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import Cookies from '~/components/Cookies'
export default {
  components: { Cookies },
  data () {
    return {
      cookies: false
    }
  }
}
</script>
<style lang="scss" scoped>
h4 {
  margin: 1rem 0;
  color: $gray-mid;
}
p , ul, li {
  font-size: $body + .2rem;
  color: $gray-mid;
  font-weight: 300;
  line-height: 1.7;
  margin: 0;
  padding: 0;
}
</style>
