import React, { useState } from 'react'

import SuperButton from './SuperButton/SuperButton'
import SuperCheckBox from './SuperCheckBox/SuperCheckBox'
import SuperInput from './SuperInput/SuperInput'

export const Test = () => {
  const [input, setInput] = useState<string>('')

  const [button, setButton] = useState<boolean>(false)

  const [checked, setChecked] = useState<boolean>(false)

  return (
    <div>
      <div>
        <h2>Testing Input</h2>
        <SuperInput value={input} onChange={e => setInput(e.currentTarget.value)} />
        <div>{input}</div>
      </div>

      <div>
        <h2>Testing Button</h2>
        <SuperButton
          onClick={() => setButton(prevState => !prevState)}
          style={button ? { backgroundColor: 'red' } : { backgroundColor: 'green' }}
        />
      </div>

      <div>
        <h2>Testing CheckBox</h2>
        <SuperCheckBox
          checked={checked}
          onChangeChecked={setChecked}
          style={{ margin: '0 auto' }}
        />
        <div>{String(checked)}</div>
      </div>
    </div>
  )
}
