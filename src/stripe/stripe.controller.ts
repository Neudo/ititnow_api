import { Body, Controller, Get, Post } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private stripeService: StripeService) {}

  @Get('products')
  async getProducts() {
    return await this.stripeService.getProducts();
  }

  @Get('customers')
  async getCustomers() {
    return await this.stripeService.getProducts();
  }
  @Post('create-checkout-session')
  async createCheckoutSession(
    @Body('productId') productId: string,
    @Body('successUrl') successUrl: string,
    @Body('cancelUrl') cancelUrl: string,
  ) {
    console.log(
      `Product ID: ${productId}, Success URL: ${successUrl}, Cancel URL: ${cancelUrl}`,
    );

    return this.stripeService.createCheckoutSession(
      productId,
      successUrl,
      cancelUrl,
    );
  }

  // @Post('handle-checkout-success')
  // async handleCheckoutSuccess(@Body('sessionId') sessionId: string) {
  //   return this.stripeService.handleCheckoutSuccess(sessionId);
  // }
}
