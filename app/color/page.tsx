// TODO: 完成前に削除
export default function ColorPalettes() {
  const palettes = [
    {
      name: "ダークウッドとストーングレーの組み合わせ",
      colors: ["#4B3832", "#7D7D7D", "#F2F2F2", "#2C3E50"],
    },
    {
      name: "ウォームグレーとミッドナイトブルーの組み合わせ",
      colors: ["#A49A8F", "#2E4053", "#D5C4A1", "#3C3C3C"],
    },
    {
      name: "モカブラウンとスレートグレーの組み合わせ",
      colors: ["#6F4E37", "#708090", "#FAF3E0", "#2F4F4F"],
    },
    {
      name: "ダークネイビーとウォームウッド",
      colors: ["#1E3D58", "#8B5E3C", "#F5F5F5", "#6D6D6D"],
    },
    {
      name: "チャコールグレーとミッドブラウン",
      colors: ["#333333", "#815B3A", "#FAF4E1", "#4A678A"],
    },
    {
      name: "フォレストグリーンとナチュラルウッド",
      colors: ["#2F4F4F", "#A67C52", "#F8F1E7", "#708090"],
    },
    {
      name: "スチールブルーとサンドベージュ",
      colors: ["#46647F", "#D9C7B0", "#C8A165", "#EFEFEF"],
    },
    {
      name: "ダークブラウンとデニムブルー",
      colors: ["#4E342E", "#5A7184", "#EFE6DC", "#515151"],
    },
  ];

  return (
    <div className="container mx-auto p-8 space-y-12">
      <h1 className="text-xl font-bold mb-6">
        シックでおしゃれなカラーパレット
      </h1>
      {palettes.map((palette, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-lg font-semibold mb-4">
            {(index += 1)}.{palette.name}
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {palette.colors.map((color, idx) => (
              <div
                key={idx}
                className="h-20 w-full flex items-center justify-center text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
