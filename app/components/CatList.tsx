import { CatImage } from "./CatImage";
import { Card } from "./Card";

export default function CatList() {
  return (
    <div>
      <h1>Cute Cat</h1>
      <div style={{ display: "flex" }}>
        <Card>
          <CatImage width={200} height={200} />
        </Card>
        <Card>
          <CatImage width={200} height={200} />
        </Card>
      </div>
    </div>
  );
}
