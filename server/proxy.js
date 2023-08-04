const express = require("express")
const axios = require("axios")

const app = express()
const port = 5050

app.use(express.json())

app.get("/api/conditions/:condition", async (req, res) => {
  try {
    const { condition } = req.params
    const apiUrl = `https://api.nhs.uk/conditions/${condition}`

    const response = await axios.get(apiUrl, {
      headers: {
        "subscription-key": "b6a8d37dfb6d442a9e3e293708d42735",
      },
    })

    res.json(response.data)
  } catch (error) {
    console.error("Error fetching data from API:", error.message)
    res.status(500).json({ error: "Something went wrong" })
  }
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
