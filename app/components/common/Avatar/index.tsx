interface AvatarProps {
    name: string;
    size?: number;
    className?: string;
}

export default function Avator({
    name, size = 40, className
}: AvatarProps) {
    const firtsLetter = name.charAt(0).toUpperCase();

    return (
        <div className={`flex items-center justify-center rounded-full bg-gray-600 text-white font-bold ${className}`}
            style={{ width: size, height: size, fontSize: size / 2 }}
        >
            {firtsLetter}

        </div>
    )
}

