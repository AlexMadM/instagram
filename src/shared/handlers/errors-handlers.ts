export const consoleErrors = (error: Error) => {
  if ('data' in error) {
    const errMsg = error.data as any

    if ('messages' in errMsg) {
      console.error(errMsg.messages)
    } else {
      console.error(errMsg)
    }
  } else {
    console.error(error)
  }
}
