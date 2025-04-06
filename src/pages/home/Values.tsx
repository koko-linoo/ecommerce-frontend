import { Avatar, Grid, Paper, Stack, Text, Title } from "@mantine/core";
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
    <Paper radius="xs" p="lg" withBorder bg="primary.0">
      <Stack gap="xs">
        <Avatar radius="md" size={60}>
          {icon}
        </Avatar>
        <Title order={3}>{title}</Title>
        <Text c="dimmed" fz="sm">
          {label}
        </Text>
      </Stack>
    </Paper>
  );
}

export function Values() {
  return (
    <Grid my="xl">
      <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
        <ValueItem
          icon={<IconTruck size={40} stroke={1} />}
          title="Free Shipping"
          label="Order over $200"
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
        <ValueItem
          icon={<IconFileDollar size={40} stroke={1} />}
          title="Money Back"
          label="Within 30 days"
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
        <ValueItem
          icon={<IconLock size={40} stroke={1} />}
          title="Secure Payment"
          label="Visa, Mastercard, Paypal"
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
        <ValueItem
          icon={<IconPhoneCall size={40} stroke={1} />}
          title="24/7 Support"
          label="Phone and Email Support"
        />
      </Grid.Col>
    </Grid>
  );
}
