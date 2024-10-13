import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faTiktok,
  faXTwitter,
  faLinkedin, // Ajoutez l'importation de l'icône LinkedIn
} from "@fortawesome/free-brands-svg-icons";
import MotionList from "./motion-list";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type Contact = {
  name: string;
  className: string;
  href: string;
  icon: any;
};

const contacts: Contact[] = [
  {
    name: "Email",
    className: "bg-yellow-500 hover:bg-yellow-600",
    href: "mailto:dounyagourja2@gmail.com", // Mettre à jour avec votre email
    icon: faEnvelope,
  },
  {
    name: "Github",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://github.com/aynuod", // Mettre à jour avec votre GitHub
    icon: faGithub,
  },
  {
    name: "Instagram",
    className: "bg-pink-500 hover:bg-pink-600",
    href: "https://www.instagram.com/dounya.gourja/profilecard/?igsh=MXh1MmZ4b3h5NGM5bQ==", // Mettre à jour avec votre Instagram
    icon: faInstagram,
  },
  {
    name: "LinkedIn", // Ajout de l'entrée LinkedIn
    className: "bg-blue-600 hover:bg-blue-700", // Choisissez une couleur qui correspond à votre thème
    href: "https://www.linkedin.com/in/dounya-gourja-820217214/", // Mettez à jour avec votre profil LinkedIn
    icon: faLinkedin,
  },
];

export default function ContactList({
  delayOffset = 0,
  showWhenInView = true,
}: {
  delayOffset?: number;
  showWhenInView?: boolean;
}) {
  return (
    <MotionList delayOffset={delayOffset} showWhenInView={showWhenInView}>
      {contacts.map((contact, index) => (
        <TooltipProvider delayDuration={0} key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full p-3 md:h-12 md:w-12",
                  contact.className,
                )}
                asChild
                aria-label={contact.name}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer" // Ajoutez cette ligne pour des raisons de sécurité
                  aria-label={contact.name}
                >
                  <FontAwesomeIcon icon={contact.icon} className="w-fit" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={6}>
              <p>{contact.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </MotionList>
  );
}
