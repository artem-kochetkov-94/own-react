export default function parseChildren(children) {
  const resultChildren = []

  children.forEach(item => {
    if (typeof item === "string") {
      return resultChildren.push({
        type: "TEXT ELEMENT",
        props: {
          nodeValue: item
        }
      })
    }

    resultChildren.push(item)
  })

  return resultChildren
}