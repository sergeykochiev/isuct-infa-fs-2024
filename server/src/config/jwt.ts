import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: 'src/.env' })

const config = {
    secret: `${process.env.JWT_SECRET}`,
    signOptions: { expiresIn: '3600s' }
}

export default registerAs('jwt', () => config)