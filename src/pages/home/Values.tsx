import { Avatar, Grid, Stack, Text, Title } from "@mantine/core";
import {
  IconFileDollar,
  IconLock,
  IconPhoneCall,
  IconTruck,
} from "@tabler/icons-react";

function ValueItem({
  icon,
  title,
  label,
}: {
  icon?: React.ReactNode;
  title?: string;
  label?: string;
}) {
  return (
    <Stack gap="xs" px="xl" py="md">
      <Avatar radius="md" size={40}>
        {icon}
      </Avatar>
      <Title order={4}>{title}</Title>
      <Text c="dimmed" fz="xs">
        {label}
      </Text>
    </Stack>
  );
}

export default function Values() {
  return (
    <Grid my={60}>
      <Grid.Col span={{ base: 12, xs: 6, lg: 3 }}>
        <ValueItem
          icon={<IconTruck size={30} stroke={1} />}
          title="Free Shipping"
          label="Order over $200"
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 6, lg: 3 }}>
        <ValueItem
          icon={<IconFileDollar size={30} stroke={1} />}
          title="Money Back"
          label="Within 30 days"
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 6, lg: 3 }}>
        <ValueItem
          icon={<IconLock size={30} stroke={1} />}
          title="Secure Payment"
          label="Visa, Mastercard, Paypal"
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 6, lg: 3 }}>
        <ValueItem
          icon={<IconPhoneCall size={30} stroke={1} />}
          title="24/7 Support"
          label="Phone and Email Support"
        />
      </Grid.Col>
    </Grid>
  );
}
