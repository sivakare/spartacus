import { NgModule } from '@angular/core';
import { HamburgerMenuModule } from '../layout/index';
import { AnonymousConsentManagementBannerModule } from './anonymous-consent-management/anonymous-consent-management.module';
import { AsmModule } from './asm/asm.module';
import { CartComponentModule } from './cart/cart.module';
import { CheckoutComponentModule } from './checkout/checkout.module';
import { BannerCarouselModule } from './content/banner-carousel/banner-carousel.module';
import {
  BannerModule,
  CmsParagraphModule,
  LinkModule,
  TabParagraphContainerModule,
} from './content/index';
import { QualtricsModule, SiteContextSelectorModule } from './misc/index';
import {
  AddressBookModule,
  CloseAccountModule,
  ConsentManagementModule,
  ForgotPasswordModule,
  MyCouponsModule,
  MyInterestsModule,
  NotificationPreferenceModule,
  OrderCancellationModule,
  OrderDetailsModule,
  OrderHistoryModule,
  OrderReturnModule,
  PaymentMethodsModule,
  ResetPasswordModule,
  ReturnRequestDetailModule,
  ReturnRequestListModule,
  UpdateEmailModule,
  UpdatePasswordModule,
  UpdateProfileModule,
} from './myaccount/index';
import {
  BreadcrumbModule,
  CategoryNavigationModule,
  FooterNavigationModule,
  NavigationModule,
  SearchBoxModule,
} from './navigation/index';
import { OrderConfirmationModule } from './order-confirmation/index';
import {
  B2BUserCreateModule,
  B2BUserDetailsModule,
  B2BUserEditModule,
  B2BUserListModule,
  BudgetCostCentersModule,
  BudgetCreateModule,
  BudgetDetailsModule,
  BudgetEditModule,
  BudgetListModule,
  OrderApprovalDetailsModule,
  OrderApprovalListModule,
  PermissionCreateModule,
  PermissionDetailsModule,
  PermissionEditModule,
  PermissionListModule,
  UnitAddressCreateModule,
  UnitAddressDetailsModule,
  UnitAddressEditModule,
  UnitApproversModule,
  UnitAssignApproversModule,
  UnitAssignRolesModule,
  UnitChildrenModule,
  UnitCostCentersModule,
  UnitCreateModule,
  UnitDetailsModule,
  UnitEditModule,
  UnitListModule,
  UnitManageAddressesModule,
  UnitUsersModule,
  UserApproversModule,
  UserAssignApproversModule,
  UserAssignPermissionsModule,
  UserAssignUserGroupsModule,
  UserGroupAssignPermissionsModule,
  UserGroupAssignUsersModule,
  UserGroupCreateModule,
  UserGroupDetailsModule,
  UserGroupEditModule,
  UserGroupListModule,
  UserGroupPermissionsModule,
  UserGroupUsersModule,
  UserPermissionsModule,
  UserUserGroupsModule,
} from './organization/index';
import {
  ProductCarouselModule,
  ProductFacetNavigationModule,
  ProductIntroModule,
  ProductListModule,
  ProductReferencesModule,
  ProductTabsModule,
  StockNotificationModule,
} from './product/index';
import { ProductImagesModule } from './product/product-images/product-images.module';
import { ProductSummaryModule } from './product/product-summary/product-summary.module';
import { ProductVariantsModule } from './product/product-variants/product-variants.module';
import { StoreFinderModule } from './storefinder/store-finder.module';
import { UserComponentModule } from './user/user.module';
import { WishListModule } from './wish-list/wish-list.module';

@NgModule({
  imports: [
    AnonymousConsentManagementBannerModule,
    AsmModule,
    HamburgerMenuModule,
    CmsParagraphModule,
    LinkModule,
    BannerModule,
    CategoryNavigationModule,
    NavigationModule,
    FooterNavigationModule,
    BreadcrumbModule,
    SearchBoxModule,
    SiteContextSelectorModule,
    QualtricsModule,
    AddressBookModule,
    OrderHistoryModule,
    OrderCancellationModule,
    OrderReturnModule,
    ReturnRequestListModule,
    ReturnRequestDetailModule,
    ProductListModule,
    ProductFacetNavigationModule,
    ProductTabsModule,
    ProductCarouselModule,
    ProductReferencesModule,
    OrderDetailsModule,
    PaymentMethodsModule,
    UpdateEmailModule,
    UpdatePasswordModule,
    UpdateProfileModule,
    ConsentManagementModule,
    CloseAccountModule,
    CartComponentModule,
    TabParagraphContainerModule,
    OrderConfirmationModule,
    StoreFinderModule,
    ProductImagesModule,
    ProductSummaryModule,
    ProductVariantsModule,
    ProductIntroModule,
    CheckoutComponentModule,
    ForgotPasswordModule,
    ResetPasswordModule,
    BannerCarouselModule,
    UserComponentModule,
    MyCouponsModule,
    WishListModule,
    NotificationPreferenceModule,
    MyInterestsModule,
    StockNotificationModule,
    BudgetListModule,
    BudgetCreateModule,
    BudgetDetailsModule,
    BudgetEditModule,
    BudgetCostCentersModule,
    OrderApprovalListModule,
    PermissionListModule,
    PermissionDetailsModule,
    PermissionEditModule,
    PermissionCreateModule,
    UnitListModule,
    UnitCreateModule,
    UnitDetailsModule,
    UnitEditModule,
    UnitAssignRolesModule,
    UnitUsersModule,
    UnitApproversModule,
    UnitAssignApproversModule,
    UnitManageAddressesModule,
    UnitChildrenModule,
    UnitCostCentersModule,
    UnitAddressEditModule,
    UnitAddressCreateModule,
    UnitAddressDetailsModule,
    UserGroupListModule,
    UserGroupCreateModule,
    UserGroupDetailsModule,
    UserGroupEditModule,
    UserGroupPermissionsModule,
    UserGroupAssignPermissionsModule,
    UserGroupUsersModule,
    UserGroupAssignUsersModule,
    B2BUserListModule,
    B2BUserCreateModule,
    B2BUserDetailsModule,
    B2BUserEditModule,
    UserPermissionsModule,
    UserAssignPermissionsModule,
    UserApproversModule,
    UserAssignApproversModule,
    UserUserGroupsModule,
    UserAssignUserGroupsModule,
    OrderApprovalDetailsModule,
  ],
})
export class CmsLibModule {}
