import classNames from "classnames"
import { useEffect, useRef, useState } from "react"

interface IEditTextProps {
  text: string,
  children?: React.ReactNode,
  className?: string,
  updateText: (text: string) => void
}

export const EditText = ({
  text,
  className = "",
  updateText,
  children
}: IEditTextProps) => {
  const [toggle, setToggle] = useState(false)
  const [textValue, setTextValue] = useState(text)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const styleWhenNotText = "w-full h-8 bg-red-100 rounded-sm"
  const containerStyle = classNames({
    [styleWhenNotText]: !text.length
  })

  useEffect(() => {
    if (toggle) {
      textAreaRef.current?.focus()
    }
  }, [toggle])

  if (toggle) {
    return (
      <textarea
        ref={textAreaRef}
        className={classNames(className, "resize-y rounded-md appearance-none p-1 overflow-hidden border-2 focus:border-blue-400 outline-none")}
        value={textValue}
        rows={3}
        onChange={(e) => setTextValue(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === "Escape") {
            setToggle(false)
            updateText(textValue)
          }
        }}
        onBlur={() => {
          setToggle(false)
          updateText(textValue)
        }}
      />
    )
  } else {
    return (
      <div className={containerStyle} onClick={() => setToggle(true)}>
        {children}
      </div>
    )
  }
}
