import './Section_form.css'
import Image from '../../image'
import Text from '../../Text'

export default function Section_form() {
  return (
    <section id='section_form'>
      <div className='container_form'>
        <div className='form_information'>
          <div className='hours'>
            <Image id='image_clock' path='/Clock.svg' alt='Clock' width={60} Height={60} />
            <Text id='text_clock' fontWeight='600' fontSize='16px' fontStyle='var(--font-nunito-regular)'>
              SEG - QUI   10:00 - 23:00
              <br className='br_text' />
              SEX - DOM  18:00 - 23:00
            </Text>
          </div>
          <div className='location'>
          <Image id='image_location' path='/Location.svg' alt='Location Pin' width={24} Height={24} />
          <Text id='text_location' fontWeight='600' fontSize='16px' fontStyle='var(--font-nunito-regular)'>
          Rua Flores Cordovil, 106
          </Text>
          </div>
          <div className='phone'>

          </div>
        </div>
        <div className='form_container'>

        </div>
      </div>
    </section>
  )
}