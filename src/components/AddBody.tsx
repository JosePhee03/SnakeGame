
function AddBody (body: bodyType): bodyType {
  body.push({ x: -30, y: -30 })

  return body
}

export default AddBody

type bodyType = Array<{ x: number, y: number }>
