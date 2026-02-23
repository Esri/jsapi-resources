interface FooterProps {
  lastUpdated: Date;
  mapSource: string;
}

export default function Footer({ lastUpdated, mapSource }: FooterProps) {
  return (
    <div className="dashboard-footer" slot="footer">
      <div className="footer-left">Source: {mapSource}</div>
      <div className="footer-right">Last updated: {lastUpdated.toLocaleString()}</div>
    </div>
  );
}
