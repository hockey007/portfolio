type SkillCardProps = {
    skill: SkillType;
  };
  
  export type SkillType = {
    image: string;
    name: string;
    level?: number
  };
  
  export default function SkillCard({ skill }: SkillCardProps) {
    const { image, name } = skill;
    return (
      <div className="flex flex-col items-center hover:border-cyan-400 gap-4 p-4 border rounded-lg shadow-md bg-gray-800 border-gray-700">
        <img src={image} alt={name} className="w-16 h-16" />
        <span className="text-lg font-semibold text-white">
          {name}
        </span>
      </div>
    );
  }  