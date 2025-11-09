// import {addToast, Button} from "@heroui/react";

// const CustomToastComponent = () => {
//   return (
//     <Button
//       variant="flat"
//       onPress={() => {
//         addToast({
//           hideIcon: true,
//           title: "Toast Title",
//           description: "Toast Description",
//           classNames: {
//             closeButton: "opacity-100 absolute right-4 top-1/2 -translate-y-1/2",
//           },
//           closeIcon: (
//             <svg
//               fill="none"
//               height="32"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               width="32"
//             >
//               <path d="M18 6 6 18" />
//               <path d="m6 6 12 12" />
//             </svg>
//           ),
//         });
//       }}
//     >
//       Show Toast
//     </Button>
//   );
// };
import React from "react";
import { Icon } from "@iconify/react";
import { addToast, ToastProvider } from "@heroui/toast";

export type NotificationType = "success" | "warning" | "danger" | "primary" | "secondary";

export interface NotificationOptions {
  title?: string;
  description?: string;
  color?: NotificationType;
  isPermanent?: boolean;
  timeout?: number;
  showProgress?: boolean;
  icon?: React.ReactNode;
  endContent?: React.ReactNode;
  onClose?: () => void;
}

const getIconForType = (type: NotificationType): React.ReactNode => {
  switch (type) {
    case "success":
      return <Icon icon="lucide:check-circle" width={24} />;
    case "warning":
      return <Icon icon="lucide:alert-triangle" width={24} />;
    case "danger":
      return <Icon icon="lucide:alert-circle" width={24} />;
    case "primary":
      return <Icon icon="lucide:info" width={24} />;
    case "secondary":
      return <Icon icon="lucide:bell" width={24} />;
    default:
      return <Icon icon="lucide:bell" width={24} />;
  }
};

export const NotificationService = {

  show: (options: NotificationOptions) => {
    const {
      title = "Notification",
      description,
      color = "primary",
      isPermanent = false,
      timeout = 5000,
      showProgress = true,
      icon,
      endContent,
      onClose,
    } = options;
    
    addToast({
      title,
      description,
      color: color as any,
      timeout: isPermanent ? 0 : timeout,
      shouldShowTimeoutProgress: !isPermanent && showProgress,
      icon: icon || getIconForType(color),
      classNames: {
        base: "backdrop-blur-md bg-opacity-80 border border-white/10 mt-3",
      },
      hideCloseButton: false,
      endContent,
      onClose,
    });
  },

  success: (title: string, description?: string, isPermanent = false) => {
    NotificationService.show({
      title,
      description,
      color: "success",
      isPermanent,
    });
  },

  warning: (title: string, description?: string, isPermanent = false) => {
    NotificationService.show({
      title,
      description,
      color: "warning",
      isPermanent,
    });
  },

  error: (title: string, description?: string, isPermanent = false) => {
    NotificationService.show({
      title,
      description,
      color: "danger",
      isPermanent,
    });
  },

  info: (title: string, description?: string, isPermanent = false) => {
    NotificationService.show({
      title,
      description,
      color: "primary",
      isPermanent,
    });
  },
};

export const NotificationProviders: React.FC = () => {
  return (
    <>
      <ToastProvider 
        //@ts-ignore
        id="permanent-notifications"
        placement="top-right"
        maxVisibleToasts={5}
        classNames={{
          base: "bg-opacity-90",
        }}
      />
    </>
  );
};
