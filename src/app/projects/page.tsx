import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
}

export default function Projects() {
  return (
    // grid
    <div className="grid grid-cols-1 gap-10 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
      <Card
        imageUrl="/assets/img/NITA.png"
        title="NITA"
        description="Merchant app for facilitating toll users in Makassar"
        tags={["Dart", "Flutter"]}
      />
      <Card
        imageUrl="/assets/img/dbs.png"
        title="IQOS DBS"
        description="For tracking the loan and delivery of IQOS devices"
        tags={["PHP", "Laravel", "MySQL", "Bootstrap"]}
      />
      <Card
        imageUrl="/assets/img/gng.png"
        title="IQOS Grab N Go"
        description="IQOS warehouse and logistics management system"
        tags={["PHP", "Laravel", "MySQL", "Bootstrap"]}
      />
      <Card
        imageUrl="/assets/img/faji.png"
        title="FAJI"
        description="Federasi Arung Jeram Indonesia, for managing competition and athlete data"
        tags={["PHP", "Laravel", "MySQL", "Bootstrap"]}
      />
      <Card
        imageUrl="/assets/img/lpdp.png"
        title="SMART LPDP"
        description="Monitoring and automation report, and real-time transaction tracking"
        tags={[
          "React.JS",
          "Node.JS",
          "Express.JS",
          "PostgreSQL",
          "Sequelize",
          "Ant Design",
        ]}
      />
      <Card
        imageUrl="/assets/img/bpjskes.png"
        title="BPJS Kesehatan Transaction Monitoring"
        description="Real-time transaction updates, monitoring system and data visual analysis for better oversight"
        tags={[
          "React.JS",
          "Node.JS",
          "Express.JS",
          "PostgreSQL",
          "MS SQL Server",
          "Sequelize",
          "Ant Design",
        ]}
      />
      <Card
        imageUrl="/assets/img/itbditkeu.png"
        title="ITB Direktorat Keuangan"
        description="DB Migration, redesign dashboard, SSO integration, and integrating advanced data visualization"
        tags={["PHP", "Codeigniter 4", "Oracle", "Bootstrap"]}
      />
    </div>
  );
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, tags }) => {
  return (
    <div className="card bg-base-300 w-100 shadow">
      <figure>
        <Image src={imageUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end overflow-auto">
          {tags.map((tag) => (
            <div key={tag} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
