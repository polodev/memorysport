const timeOptions = [
	{ value: 60, label: "1m"},
	{ value: 180, label: "3m" },
	{ value: 300, label: "5m" },
	{ value: 600, label: "10m" },
	{ value: 900, label: "15m"},
	{ value: 120, label: "20m"},
	{ value: 150, label: "25m"},
	{ value: 180, label: "30m"},
	{ value: 360, label: "1h"},
]

const digitOptions = [
  {value: 1, label: 1},
  {value: 2, label: 2},
  {value: 3, label: 3},
  {value: 4, label: 4},
  {value: 5, label: 5},
  {value: 6, label: 6},
  {value: 7, label: 7},
  {value: 8, label: 8},
  {value: 9, label: 9},
]

const operatorOptions = [
  {value: "+", label: "+"},
  {value: "-", label: "-"},
  {value: "*", label: "*"},
  {value: "/", label: "/"},
  {value: "any", label: "any"},
]

const intervalOptions = [
  {value: "2", label: "2s"},
  {value: "5", label: "5s"},
  {value: "10", label: "10s"},
  {value: "15", label: "15s"},
  {value: "20", label: "20s"},
  {value: "25", label: "25s"},
  {value: "30", label: "30s"},
  {value: "35", label: "35s"},
  {value: "40", label: "40s"},
  {value: "45", label: "45s"},
  {value: "50", label: "50s"},
  {value: "55", label: "55s"},
  {value: "60", label: "1m"},
  {value: "120", label: "2m"},
  {value: "180", label: "3m"},
]

const all = {
  timeOptions,
  digitOptions,
  operatorOptions,
  intervalOptions
}
export default all;