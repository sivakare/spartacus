import { ConstructorDeprecation } from '../../../shared/utils/file-utils';
import { CHECKOUT_CONFIG_SERVICE_MIGRATION } from './data/checkout-config.service.migration';
import { SHIPPING_ADDRESS_SET_GUARD_MIGRATION } from './data/shipping-address-set.guard.migration';
import { PAYMENT_DETAILS_SET_GUARD_MIGRATION } from './data/payment-details-set.guard.migration';
import { DELIVERY_MODE_SET_GUARD_MIGRATION } from './data/delivery-mode-set.guard.migration';
import { CHECKOUT_GUARD_MIGRATIONS } from './data/checkout.guard.migration';
import { CHECKOUT_PROGRESS_MOBILE_TOP_COMPONENT_MIGRATION } from './data/checkout-progress-mobile-top.component.migration';
import { CHECKOUT_PROGRESS_MOBILE_BOTTOM_COMPONENT_MIGRATION } from './data/checkout-progress-mobile-bottom.component.migration';
import { CHECKOUT_PROGRESS_COMPONENT_MIGRATION } from './data/checkout-progress.component.migration';
import { DELIVERY_MODE_COMPONENT_MIGRATION } from './data/delivery-mode.component.migration';
import { PAYMENT_METHOD_COMPONENT_MIGRATION } from './data/payment-method.component.migration';
import { SHIPPING_ADDRESS_COMPONENT_MIGRATION } from './data/shipping-address.component.migration';
import { REVIEW_SUBMIT_COMPONENT_MIGRATION } from './data/review-submit.component.migration';

export const CONSTRUCTOR_DEPRECATION_DATA: ConstructorDeprecation[] = [
  CHECKOUT_CONFIG_SERVICE_MIGRATION,
  SHIPPING_ADDRESS_SET_GUARD_MIGRATION,
  PAYMENT_DETAILS_SET_GUARD_MIGRATION,
  DELIVERY_MODE_SET_GUARD_MIGRATION,
  CHECKOUT_GUARD_MIGRATIONS,
  CHECKOUT_PROGRESS_MOBILE_TOP_COMPONENT_MIGRATION,
  CHECKOUT_PROGRESS_MOBILE_BOTTOM_COMPONENT_MIGRATION,
  CHECKOUT_PROGRESS_COMPONENT_MIGRATION,
  DELIVERY_MODE_COMPONENT_MIGRATION,
  PAYMENT_METHOD_COMPONENT_MIGRATION,
  SHIPPING_ADDRESS_COMPONENT_MIGRATION,
  REVIEW_SUBMIT_COMPONENT_MIGRATION,
];
